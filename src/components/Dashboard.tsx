import React from 'react';
import { Calendar, FileText, Users, Bell, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: <Users />, title: "Total Students", value: "15,234" },
    { icon: <Calendar />, title: "Active Exams", value: "12" },
    { icon: <FileText />, title: "Results Published", value: "45" },
    { icon: <Clock />, title: "Upcoming Exams", value: "8" },
  ];

  const announcements = [
    { title: "End Semester Examinations Schedule Released", date: "2024-03-15" },
    { title: "Results for B.Tech 3rd Year Published", date: "2024-03-12" },
    { title: "Special Supplementary Examinations Notice", date: "2024-03-10" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:translate-x-2 transition-transform">
              <a href="#" className="flex items-center space-x-2">
                <span>→</span>
                <span>Download Hall Tickets</span>
              </a>
            </li>
            <li className="hover:translate-x-2 transition-transform">
              <a href="#" className="flex items-center space-x-2">
                <span>→</span>
                <span>View Exam Schedule</span>
              </a>
            </li>
            <li className="hover:translate-x-2 transition-transform">
              <a href="#" className="flex items-center space-x-2">
                <span>→</span>
                <span>Check Results</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="text-blue-600" />
            <h3 className="text-xl font-bold">Announcements</h3>
          </div>
          <ul className="space-y-4">
            {announcements.map((announcement, index) => (
              <li key={index} className="border-b pb-2 last:border-b-0">
                <p className="font-medium text-gray-800">{announcement.title}</p>
                <p className="text-sm text-gray-500">{announcement.date}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <Calendar className="text-blue-600" />
              <div>
                <p className="font-medium">Mid Semester Exams</p>
                <p className="text-sm text-gray-600">Starts in 5 days</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <FileText className="text-blue-600" />
              <div>
                <p className="font-medium">Results Declaration</p>
                <p className="text-sm text-gray-600">Next Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}