"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date());

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const generateDays = () => {
    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === new Date().getDate() && currentMonth === new Date().getMonth();
      daysArray.push(
        <div key={i} className={`p-2 text-center text-sm rounded-full ${isToday ? "bg-indigo-600 text-white font-bold shadow-md" : "hover:bg-indigo-50 text-slate-700"}`}>
          {i}
        </div>
      );
    }
    return daysArray;
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-indigo-50 w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-slate-800">{monthNames[currentMonth]} {currentYear}</h3>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-indigo-500 uppercase">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {generateDays()}
      </div>
    </div>
  );
}