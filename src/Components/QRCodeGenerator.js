
import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [qrCode, setqrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setqrCode(input);
        setInput('');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">QR Code Generator</h1>
                <div className="flex mb-4">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        name="qr-code"
                        placeholder="Enter your value here"
                        className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        disabled={input.trim() === ''}
                        onClick={handleGenerateQrCode}
                        className="bg-green-500 text-white rounded-r-md px-4 py-2 hover:bg-green-600 disabled:bg-gray-300"
                    >
                        Generate
                    </button>
                </div>
                <div className="flex justify-center">
                    <QRCode id="qr-code-value" value={qrCode} size={256} bgColor="#fff" />
                </div>
            </div>
        </div>
    );
}

export default QRCodeGenerator;