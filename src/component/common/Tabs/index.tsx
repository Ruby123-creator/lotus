import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { banner } from '../../../Framework/utils/static';







const TrendingGames: React.FC = () => (
  <div className="w-full">
    {/* Tab container should be scrollable on smaller screens */}
    <div className="overflow-x-auto no-scrollbar">
    <div className="p-2 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 gap-1 w-full max-w-full overflow-x-auto no-scrollbar">
          {(banner || []).map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 rounded">
               <img
                    src={item?.url}
                    className="w-full h-full transform transition-transform duration-500 ease-in-out rounded"
                    alt="casino-event-image"
                    loading="lazy"
                    title="MINES"
                  />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TrendingGames;
