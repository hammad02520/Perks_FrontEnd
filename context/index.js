import React, { createContext, useContext, useState, ReactNode } from 'react';


const PerksContext = createContext(undefined);

export const usePerksContext = () => {
    const context = useContext(PerksContext);
    if (context === undefined) {
        throw new Error('usePerksContext must be used within a Provider');
    }

    return context;
}


export const PerksProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [userPointsUpdated, setUserPointsUpdated] = useState(0);
    const [currentRedeemedRewardId, setCurrentRedeemedRewardId] = useState();

    return (
        <PerksContext.Provider value={{ currentUser, setCurrentUser, userPointsUpdated, setUserPointsUpdated,
            setCurrentRedeemedRewardId, currentRedeemedRewardId }}>
            {children}
        </PerksContext.Provider>
    );
};



