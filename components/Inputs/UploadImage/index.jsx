import React, { useState } from "react"
import { Upload, Link, Loader2, ImageIcon } from "lucide-react"

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event) => {
    // File change logic here
    const file = event.target.files[0]
    if (file) {
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleUrlChange = (event) => {
    // URL change logic here
    setImageUrl(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    // Submit logic here
  }

  return (
    <div className="w-full max-w-md bg-white  shadow-lg rounded-lg overflow-hidden mx-auto mt-4">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-black">
          Upload Image
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  {/* Drag and Drop is not implemented */}
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="image-url"
              className="block text-sm font-medium text-gray-700"
            >
              Or enter image URL
            </label>
            <div className="flex rounded-md shadow-sm h-8">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <Link className="h-4 w-4" />
              </span>
              <input
                type="url"
                name="image-url"
                id="image-url"
                className="flex-1 block w-full rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-3 bg-white border border-gray-300"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={handleUrlChange}
              />
            </div>
          </div>
          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </form>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <ImageIcon className="inline-block mr-2 h-4 w-4" />
              Process Image
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default UploadImage
