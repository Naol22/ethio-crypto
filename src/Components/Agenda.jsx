import React from 'react';

const Agenda = () => {
    const agendaItems = [
        {
            date: "March 5th, 2025",
            events: [
                {
                    time: "6:00 PM - 6:30 PM",
                    title: "Welcome / Registration",
                    location: "Main Hall",
                    description: "Check-in and networking"
                },
                {
                    time: "6:30 PM - 6:45 PM",
                    title: "Opening Remarks",
                    speaker: "Robert Luft",
                    location: "Main Hall",
                    description: "Welcome address and event overview"
                },
                {
                    time: "6:45 PM - 7:00 PM",
                    title: "Current State of Ethiopia Bitcoin Mining",
                    speaker: "Kal Kassa",
                    location: "Main Hall",
                    description: "Overview of Bitcoin mining developments in Ethiopia"
                },
                {
                    time: "7:00 PM - 8:00 PM",
                    title: "Panel Discussions",
                    location: "Main Hall",
                    description: "Industry experts discuss the future of Bitcoin mining in Ethiopia"
                },
                {
                    time: "8:00 PM - 9:00 PM",
                    title: "Social Hour",
                    location: "Main Hall",
                    description: "Networking and refreshments"
                }
            ]
        },
        {
            date: "March 6th, 2025",
            events: [
                {
                    time: "TBA",
                    title: "Site Tour of Munich International Mining",
                    location: "Bitcoin Mining Facility",
                    description: "Exclusive tour of a state-of-the-art Bitcoin mining facility"
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
