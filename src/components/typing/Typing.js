import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const stories = [
    `Ulwaluko, the Xhosa initiation school, is a rite of passage guiding young men into adulthood through lessons in respect, accountability, and self-discipline. It teaches respect for all elders, not just biological parents, and emphasizes the importance of personal responsibility. A core principle, "ukulwa kokwama khwenkwe" ("fighting is for boys"), encourages resolving conflicts through words, 
     not violence, highlighting self-restraint and care for family. 
     However, Ulwaluko is often misunderstood by other tribes who view it as exclusionary or harsh. This misunderstanding stems from differences in cultural practices and an incomplete understanding of its true purpose. It's essential to recognize that Ulwaluko isn’t about division but about nurturing young men.
     Ulwaluko is a school, and not everyone passes. Some may fail and misuse their influence to gain recognition or claim respect, often boasting about their experiences. However, true men, who have learned the lessons of humility and responsibility, let their actions speak louder than words. Their growth and character, not their proclamations, reveal the strength they’ve gained from the initiation.`,
    `Intonjane is a Xhosa rite of passage into womanhood practiced in the Eastern Cape of South Africa. The ritual takes place after a girl has had her first period. This ritual is symbolic of a girl's sexual maturity and ability to conceive. It is through this ritual that girls are taught about socially accepted behaviours of Xhosa women, while also encouraging them not to have sex before marriage. 
     The origin of the name intonjane is associated with the life cycle of a stick insect. At the end of its larval stage, caterpillars encase themselves in a little grass-like mat cocoon until they are ready to emerge as adults. During these months, trees have these grassy cocoons that Xhosa people refer to as ntonjane. The kind of grass that the girl sits on during the ritual, called inxkopho, bears 
     a resemblance to the cocoons encasing of the caterpillars on the tree, hence the name intonjane. The intonjane ritual takes three to six weeks, and several events take place during that period.`,
    `The game of Icekwa holds a powerful lesson for us as adults. In our childhood, Icekwa was all about chasing each other with energy and joy, passing on the responsibility with a simple touch and shout, “Cekwa!” Each child took their turn, and when they were tagged, they’d rest briefly before continuing the chase, ready to pass icekwa to someone else.
     Now, as adults, the spirit of Icekwa reminds us to help each other. When we achieve something or receive support, we hold icekwa, a responsibility to pass that help forward. The game teaches us not only to run with the same energy toward others in need but also to recognize that after receiving help, it’s okay to take a moment, gather our strength, and then look for someone else who might need a hand.
     In this way, Icekwa becomes a cycle of support, a game of helping one another build better lives. With each hand we extend, each “Cekwa!” we pass on, we contribute to a stronger, united community. So, icekwa likuwe—now it’s your turn. Once you’re ready, pass it on to someone else, and let’s keep the spirit of Icekwa alive in every act of kindness and support`
];
const TypingTest = () => {
    const [timeLimit, setTimeLimit] = useState(30);
    const [timeRemaining, setTimeRemaining] = useState(timeLimit);
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState('');
    const [input, setInput] = useState('');
    const [correctWords, setCorrectWords] = useState(0);
    const [finished, setFinished] = useState(false);
    const [highlightedText, setHighlightedText] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        setText(randomStory);
        setHighlightedText(randomStory.split(' ').map(word => ({ word, correct: null })));
    }, []);

    useEffect(() => {
        if (isTyping && timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining === 0) {
            finishTyping();
        }
    }, [timeRemaining, isTyping]);

    const handleTimeSelection = (event) => {
        const selectedTime = parseInt(event.target.value, 10);
        setTimeLimit(selectedTime);
        setTimeRemaining(selectedTime);
    };

    const startTyping = () => {
        setIsTyping(true);
        setInput('');
        setCorrectWords(0);
        setFinished(false);
        setTimeRemaining(timeLimit);
    };

    const finishTyping = () => {
        setIsTyping(false);
        setFinished(true);
        calculateResults();
    };

    const handleInputChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
        if (!isTyping) startTyping();
        updateHighlightedText(newInput);
    };

    const updateHighlightedText = (newInput) => {
        const wordsArray = text.split(' ');
        const inputWords = newInput.trim().split(' ');
        const updatedHighlightedText = wordsArray.map((word, index) => ({
            word,
            correct: inputWords[index] === word ? true : (inputWords[index] ? false : null),
        }));
        setHighlightedText(updatedHighlightedText);
    };

    const calculateResults = () => {
        const wordsArray = text.split(' ');
        const inputWords = input.trim().split(' ');
        let correctCount = 0;

        inputWords.forEach((word, i) => {
            if (word === wordsArray[i]) correctCount += 1;
        });

        setCorrectWords(correctCount);
    };

    const getWPM = () => {
        const minutes = timeLimit / 60;
        const wordsTyped = input.split(' ').length;
        return Math.round(wordsTyped / minutes);
    };

    const getAccuracy = () => {
        const totalWords = text.split(' ').length;
        return ((correctWords / totalWords) * 100).toFixed(2);
    };

    const resetTest = () => {
        setInput('');
        setCorrectWords(0);
        setIsTyping(false);
        setFinished(false);
        setTimeRemaining(timeLimit);
    };

    return (
        <div className="bg-white p-6 rounded flex flex-col h-full">
            <h2 className="text-lg font-bold mb-4">{timeRemaining} Second Typing Test</h2>
                {/* Results */}
                {finished && (
                <div className="text-center mt-4 mb-8">
                    <h3 className="font-bold mb-2 text-4xl">Results</h3>
                    <p className='font-semibold text-3xl'>WPM: {getWPM()} (Goal: 60 WPM)</p>
                    <p className='font-semibold text-3xl'>Accuracy: {getAccuracy()}%</p>
                    {getWPM() >= 60 && getAccuracy() >= 98 ? (
                        <p className="text-green-600 font-semibold text-3xl">Congratulations! You passed.</p>
                    ) : (
                        <p className="text-red-600 font-semibold text-3xl">Keep practicing to reach 60 WPM and 98% accuracy.</p>
                    )}
                </div>
            )}    
            {/* Time selection before starting */}
            {!isTyping && !finished && (
                <div className="mb-4">
                    <label className="mr-2 font-semibold">Select Time Limit:</label>
                    <select value={timeLimit} onChange={handleTimeSelection} className="border p-2 rounded">
                        <option value={30}>30 seconds</option>
                        <option value={60}>1 minute</option>
                        <option value={120}>2 minutes</option>
                    </select>
                </div>
            )}
            
            {/* Typing test area */}
            <div className="p-4 mb-4 border border-gray-200 bg-gray-100 rounded">
                <p className="mb-2">
                    {highlightedText.map((item, index) => (
                        <span
                            key={index}
                            style={{
                                color: item.correct === true ? 'green' : item.correct === false ? 'red' : 'black',
                            }}
                        >
                            {item.word}{' '}
                        </span>
                    ))}
                </p>
            </div>

            {/* Timer */}
            <div className="text-gray-500 text-sm mb-4">Time Remaining: {timeRemaining}s</div>
            
            {/* Text area for input */}
            <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Start typing here..."
                value={input}
                onChange={handleInputChange}
                disabled={finished}
            />

            <div className="flex justify-between mt-4">
                <Link onClick={resetTest} className="text-blue-600 hover:underline">Reset</Link>
                <button onClick={startTyping} className="text-blue-600 hover:underline">
                    Start Test
                </button>
            </div>
        </div>
    );
};

export default TypingTest;
