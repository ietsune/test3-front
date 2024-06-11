
import Link from 'next/link';
import Header from '/components/Header.js'
import Image from 'next/image';
import { motion } from "framer-motion";
import css from "styled-jsx/css";

//import styles from '/styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Water() {
    const [clickCount, setClickCount] = useState(0);
    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchClickCount();
    }, []);

    const fetchClickCount = async () => {
        try {
            const response = await fetch('https://test3-1-bt3x.onrender.com/click-count');
            const data = await response.json();
            setClickCount(data.count);
        } catch (error) {
            console.error('Error fetching click count:', error);
        }
    };

    const handleClick = async () => {
        try {
            const response = await fetch('https://test3-1-bt3x.onrender.com/increment-click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setClickCount(data.count);
        } catch (error) {
            console.error('Error incrementing click count:', error);
        }
    };

    useEffect(() => {
        fetchMessage();
    }, []);

    const fetchMessage = async () => {
        try {
            const response = await fetch('https://test3-1-bt3x.onrender.com');
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://test3-1-bt3x.onrender.com/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });
            const data = await response.json();
            setMessage(data.message);
            setInputText('');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <div className="font-sans mx-auto">
                <Header />

                <div className="flex items-center justify-center h-screen bg-[#547443]">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h1 className="text-white text-4xl font-bold mb-4 text-center">
                            下のアイコンをタップ！
                        </h1>

                        <div className={`${className} wrapper`}>




                            <motion.button
                                whileTap={{ scale: 1.3 }}
                                className="w-[350px] h-[350px] rounded-full bg-[#3869b4] flex items-center justify-center"
                                onClick={handleClick}
                            >

                                <img
                                    src="/images/water.jpg"
                                    alt="funnel inside a round icon"
                                    className="w-[300px] h-[300px] rounded-full"
                                />


                            </motion.button>

                        </div>


                        <h2 className="text-white text-2xl font-semibold mt-4 text-center">
                            ボタンが押された回数：{clickCount}
                        </h2>
                    </div>
                </div>
                <h1>Next.js + Flask</h1>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text"
                />
                <button onClick={handleSubmit}>Submit</button>
                <h1 >
                    <p>出力: {message}</p>
                </h1>
            </div>


            {styles}
        </>
    );
}


const { className, styles } = css.resolve`
  .wrapper {
    margin: 100px;
  }
  button {
   
  }

  `;
