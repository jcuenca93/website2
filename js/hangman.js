figure-part {
    display: none;
}

.popup-container {
    background-color: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*display: flex;*/
    display: none;
    align-items: center;
    justify-content: center;
}

.popup {
    background: #2980B9;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0,0,0,0.1);
    padding: 20px;
    text-align: center;
}

.popup button {
    cursor: pointer;
    background-color: white;
    color: #2980B9;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
}

.popup button:active {
    transform: scale(0.98);
}

.notification-container {
    background-color: rgba(0,0,0,0.3);
    padding: 15px 20px;
    border-radius: 10px 10px 0 0;
    position: absolute;
    bottom: -50px;
    transition: transform 0.3s ease-in-out;
}

.notification-container p {
    margin: 0;
}

.notification-container.show {
    transform: translate(-50px);