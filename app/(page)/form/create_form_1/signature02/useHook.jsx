"use client";
import React, { useEffect, useRef, useState } from "react";

export default function useHook({ onSave, isOpen, onClose }) {
  const sigRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);

  const handleClear = () => {
    sigRef.current.clear();
    setSignatureData(null);
  };

  useEffect(() => {
    if (!isOpen || !sigRef.current) return;

    const canvas = sigRef.current.getCanvas();
    const ctx = canvas.getContext("2d");

    const ratio = window.devicePixelRatio || 1;
    const displayWidth = canvas.offsetWidth;
    const displayHeight = canvas.offsetHeight;

    canvas.width = displayWidth * ratio;
    canvas.height = displayHeight * ratio;
    canvas.style.width = displayWidth + "px";
    canvas.style.height = displayHeight + "px";

    ctx.scale(ratio, ratio);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000";

    let isDrawing = false;
    const points = []; // เก็บจุดลาก

    const startDraw = (e) => {
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      points.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        pressure: e.pressure || 0.5,
      });
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        pressure: e.pressure || 0.5,
      };
      points.push(point);

      if (points.length < 3) return; // ต้องมีอย่างน้อย 3 จุดสำหรับ Bezier

      // ใช้ 3 จุดสุดท้ายสร้าง Bezier curve
      const [p0, p1, p2] = points.slice(-3);

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineWidth = 0.5 + p1.pressure * 4.5; // ปรับตามแรงกด
      ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
      ctx.stroke();
    };

    const stopDraw = () => {
      isDrawing = false;
      points.length = 0; // ล้างจุด
    };

    canvas.addEventListener("pointerdown", startDraw);
    canvas.addEventListener("pointermove", draw);
    canvas.addEventListener("pointerup", stopDraw);
    canvas.addEventListener("pointerleave", stopDraw);

    return () => {
      canvas.removeEventListener("pointerdown", startDraw);
      canvas.removeEventListener("pointermove", draw);
      canvas.removeEventListener("pointerup", stopDraw);
      canvas.removeEventListener("pointerleave", stopDraw);
    };
  }, [isOpen]);

  const handleSave = () => {
    if (!sigRef.current) return;

    const canvas = sigRef.current.getCanvas();
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    const imgData = ctx.getImageData(0, 0, w, h);
    const pixels = imgData.data;

    let minX = w,
      minY = h,
      maxX = 0,
      maxY = 0;
    let hasInk = false;

    // 🔍 หาพื้นที่ที่มีเส้น
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4 + 3; // alpha
        if (pixels[idx] > 0) {
          hasInk = true;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (!hasInk) {
      alert("กรุณาเซ็นก่อนบันทึก");
      return;
    }

    const cropWidth = maxX - minX;
    const cropHeight = maxY - minY;

    // ✂️ ครอปลายเซ็น
    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = cropWidth;
    croppedCanvas.height = cropHeight;
    croppedCanvas
      .getContext("2d")
      .drawImage(
        canvas,
        minX,
        minY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );

    // 🧭 จัดลายเซ็นให้อยู่ตรงกลาง canvas ใหม่
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = w;
    finalCanvas.height = h;
    const finalCtx = finalCanvas.getContext("2d");
    const offsetX = (w - cropWidth) / 2;
    const offsetY = (h - cropHeight) / 2;
    finalCtx.drawImage(croppedCanvas, offsetX, offsetY);

    // 📸 export PNG ชัดสุด
    const dataUrl = finalCanvas.toDataURL("image/png", 1.0);

    setSignatureData(dataUrl);
    onSave(dataUrl);
    onClose();
  };
  return {
    sigRef,
    signatureData,
    setSignatureData,
    handleClear,
    handleSave,
  };
}
