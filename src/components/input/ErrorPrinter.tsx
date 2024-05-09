import React from 'react';

interface ErrorComponentProps {
    error: string;
}

function ErrorPrinter({ error = `Done!` }: ErrorComponentProps){

    return (
        <div>
            <h2>Произошла ошибка:</h2>
            <p style={{backgroundColor: "rgba(247, 14, 14, 0.8)"}}>{error}</p>
        </div>
    );
}

export default ErrorPrinter;

