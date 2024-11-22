import React, { useEffect, useState } from 'react'
import { AiOutlineRobot } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { getRecentActivityById } from '../../api/recentActivityService';

function ActivityDetails({}) {
    const { id } = useParams();
    const [conversationData, setConversationData] = useState(null);

    useEffect(() => {
        const fetchConversationData = async () => {
            if (id) {
                const response = await getRecentActivityById(id);
                setConversationData(response);
            }
        };
        fetchConversationData();
    }, [id]);

    const renderContent = (conversationData, key, value) => {
        if (key.includes('prompt') && value.includes('<iframe')) {
            return (
                <div className="w-full">
                    <div
                        className="flex justify-center p-5"
                        dangerouslySetInnerHTML={{ __html: value }}
                    />
                </div>
            );
        }
        if(conversationData.conversationType === 'IMAGE' && key.includes('prompt')) {
            return (
                <div className="flex justify-center">
                    <img src={value} alt="image" className="w-full h-full" />
                </div>
            );
        }
        return (
            <div className={`flex ${key.includes('prompt') ? 'bg-slate-50 w-fit max-w-[60%] shadow rounded-xl' : 'w-[75%]'} p-5`}>
                {!key.includes('prompt') && (
                    <AiOutlineRobot className="mr-5 min-h-[50px] min-w-[30px] text-blue-600" />
                )}
                <p className="text-[16px] tracking-wide whitespace-pre-line">{value}</p>
            </div>
        );
    }

    return (
        <>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xs shadow-lg flex items-center justify-center">
                <AiOutlineRobot size={50} className="mr-3" />
                <h1 className="text-2xl font-medium">SomaTek AI</h1>
            </div>
            <div className='p-8 md:p-20 lg:p-20 flex items-center justify-center'>
                <div className="flex flex-col w-[80%] bg-gray-100 rounded-lg">
                    {conversationData && Object.entries(conversationData.conversation).map(([key, value], index) => (
                        <div key={index} className={`flex w-full p-4 ${key.includes('prompt') ? 'justify-center' : 'justify-start'}`}>
                            {renderContent(conversationData, key, value)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ActivityDetails;
