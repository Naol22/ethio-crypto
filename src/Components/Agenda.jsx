import React from 'react';

const Agenda = () => {
    const agendaItems = [
        {
            date: "March 15, 2025",
            events: [
                {
                    time: "8:30 AM - 10:00 AM",
                    title: "Registration and Welcome Breakfast",
                    location: "Main Hall",
                    description: "Start your day with networking over coffee and breakfast"
                },
                {
                    time: "10:00 AM - 11:30 AM",
                    title: "Opening Keynote: The Future of Blockchain in Ethiopia",
                    speaker: "Dr. Abebe Bekele",
                    location: "Grand Ballroom",
                    description: "Exploring the transformative potential of blockchain technology in Ethiopia"
                },
                {
                    time: "11:45 AM - 1:00 PM",
                    title: "Panel Discussion: Digital Innovation",
                    speaker: "Industry Leaders Panel",
                    location: "Conference Room A",
                    description: "Leading experts discuss the future of digital innovation"
                }
            ]
        },
        {
            date: "March 16, 2025",
            events: [
                {
                    time: "9:00 AM - 10:30 AM",
                    title: "Blockchain Workshop",
                    speaker: "Tech Team",
                    location: "Workshop Room",
                    description: "Hands-on session on blockchain development"
                },
                {
                    time: "10:45 AM - 12:00 PM",
                    title: "Future of Digital Payments",
                    speaker: "Sarah Johnson",
                    location: "Main Hall",
                    description: "Insights into the evolution of digital payment systems"
                },
                {
                    time: "12:15 PM - 1:30 PM",
                    title: "Closing Ceremony",
                    location: "Grand Ballroom",
                    description: "Concluding remarks and networking"
                }
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-[#03022B] text-center mb-12">Event Schedule</h2>
                
                <div className="space-y-16">
                    {agendaItems.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative">
                            <div className="sticky top-0 bg-gradient-to-r from-[#03022B] to-[#1a1940] text-white py-4 px-6 rounded-lg shadow-md mb-8">
                                <h3 className="text-2xl font-semibold">{day.date}</h3>
                            </div>
                            
                            <div className="space-y-8">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} 
                                         className="relative pl-8 group">
                                        {/* Timeline dot and line */}
                                        <div className="absolute left-0 top-0 h-full">
                                            <div className="w-3 h-3 bg-[#03022B] rounded-full absolute -left-1.5"></div>
                                            {eventIndex !== day.events.length - 1 && (
                                                <div className="w-0.5 h-full bg-gray-200 absolute left-0"></div>
                                            )}
                                        </div>
                                        
                                        {/* Event content */}
                                        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="text-sm text-[#03022B] font-medium mb-2">{event.time}</div>
                                            <h4 className="text-xl font-semibold text-[#03022B] mb-2">{event.title}</h4>
                                            {event.speaker && (
                                                <div className="text-gray-600 mb-2">
                                                    <span className="font-medium">{event.speaker}</span>
                                                </div>
                                            )}
                                            <div className="text-sm text-gray-500 mb-2">{event.location}</div>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Agenda;
