import { useState, useRef } from 'react'
import './CsvUpload.css'

function CsvUpload() {
    // State to track if user is dragging a file over the drop zone
    const [dragging, setDragging] = useState(false)
    // State to store the uploaded file name
    const [fileName, setFileName] = useState('')
    const fileInputRef = useRef(null)

    // Handler for when a dragged file enters the drop zone
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

    // Handler for when a file is actually dropped
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)

        // Get the files from the drop event
        const files = e.dataTransfer.files
        if (files.length > 0) {
            setFileName(files[0].name)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name)
        }
    }

    // Handler for normal file upload click
    const handleClick = () => {
        // Trigger the hidden file input
        fileInputRef.current?.click()
    }

    return (
        <section className="csv-upload-section" id="upload">
            <h2 className="section-heading">
                <span className="section-icon">📊</span>
                Upload Your Data
            </h2>
            <p className="section-desc">
                Drag and drop your CSV file below, or click to browse
            </p>

            <div className="csv-upload">
                <div
                    className={`csv-upload-zone ${dragging ? 'dragging' : ''} ${fileName ? 'has-file' : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={handleClick}
                >
                    <div className="corner-accent top-left"></div>
                    <div className="corner-accent top-right"></div>
                    <div className="corner-accent bottom-left"></div>
                    <div className="corner-accent bottom-right"></div>

                    <div className="upload-icon-wrapper">
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
                        <div className="upload-ring"></div>
                    </div>

                    {fileName ? (
                        <div className="file-info">
                            <p className="file-name">📄 {fileName}</p>
                            <p className="file-hint">Click to change file</p>
                        </div>
                    ) : (
                        <>
                            <p className="csv-upload-title">Drop your CSV into the void</p>
                            <p className="csv-upload-hint">
                                or click to browse <span>• CSV files only</span>
                            </p>
                        </>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv"
                        className="csv-upload-input"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </section>
    )
}

export default CsvUpload
