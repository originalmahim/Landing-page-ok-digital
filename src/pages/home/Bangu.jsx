import React, { useState, useEffect } from 'react';

const Bangu = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(29);
  const [seconds, setSeconds] = useState(31);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds by 1
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          // If seconds reach 0, decrease minutes by 1 and set seconds to 59
          setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
              // If minutes reach 0, decrease hours by 1 and set minutes to 59
              setHours(prevHours => {
                if (prevHours === 0) {
                  // If hours reach 0, decrease days by 1 and set hours to 23
                  setDays(prevDays => {
                    if (prevDays === 0) {
                      // Timer has reached 0, clear interval
                      clearInterval(interval);
                      return 0;
                    }
                    return prevDays - 1;
                  });
                  return 23;
                }
                return prevHours - 1;
              });
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' bg-black'>
      <div className="flex items-center justify-around   h-14 bg-black ">
        <div className="text-[20px] font-bold text-yellow-500">অফারটি চলবে</div>
        <div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-yellow-500">
            {/* <div className="flex flex-col  ">
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": days }}>{days}</span>
              </span>
              days
            </div> */}
            <div className="flex flex-col">
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": hours }}>{hours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": minutes }}>{minutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": seconds }}>{seconds}</span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangu;
