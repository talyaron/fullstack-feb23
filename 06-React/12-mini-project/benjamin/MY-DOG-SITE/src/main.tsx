import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import './index.css'
import { io } from "socket.io-client";

const socket = io();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
    <App />
    </NextUIProvider>
)
