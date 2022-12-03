import { useState, useEffect } from 'react';
import ScheduledTransaction from './ScheduledTransaction';

function ScheduledTransactions({transaction, toggleState, setToggleState}) {
    

    const transactions = [{
        TransactionID: 1,
        AccountID: 621156213,
        ReceivingAccountID: 339657462,
        Date: "2022-11-08T04:00:00.000Z",
        TransactionAmount: 500.00,
        Comment: "Monthly Pocket Money"
    },
    {
        TransactionID: 1,
        AccountID: 621156213,
        ReceivingAccountID: 339657462,
        Date: "2022-11-08T04:00:00.000Z",
        TransactionAmount: 500.00,
        Comment: "Monthly Pocket Money"
    },
];
    
    return (
    <div style={{ display: toggleState === 2 ? 'flex': 'none', width: '100%', height: '100%', borderTopRightRadius: 20, background: '#ec1d25' }}>
        <div style={{        
            width: '100%', height: 50, 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            color: 'white' }}
        >
                <div style={{ display: 'flex', alignItems: 'center', width: '10%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Transaction ID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Sender ID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Recipient ID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Date</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>TransactionAmount</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Comment</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%' }}>
                    <div style={{ width: '100%', height: 30 }}>Delete</div>
                </div>
        </div>
        <div style={{ position: 'absolute', top: 90, width: '100%', height: '100%', overflowY: 'hidden' }}>
            {transactions.map((transaction) => (
                <div key={transaction.TransactionID}>
                    <ScheduledTransaction transaction={transaction} />
                </div>
            ))}
        </div>
    </div>
    );
}

export default ScheduledTransactions;