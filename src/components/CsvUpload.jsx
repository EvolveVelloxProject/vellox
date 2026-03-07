import { useState, useRef } from 'react'
import './CsvUpload.css'

function CsvUpload() {
    const [dragging, setDragging] = useState(false)
    const fileInputRef = useRef(null)

    const handleDragEnter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        // File handling will be added later
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="csv-upload">
            <div
                className={`csv-upload-zone ${dragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <svg
                    className="csv-upload-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="csv-upload-title">Drop your CSV into the void</p>
                <p className="csv-upload-hint">
                    or click to browse <span>• CSV files only</span>
                </p>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    className="csv-upload-input"
                />
            </div>
        </div>
    )
}

export default CsvUpload
