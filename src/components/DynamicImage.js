import ImageLoader from './ImageLoader'


const DynamicImage = ({ fileName, alt, className, ...props }) => {
    const { loading, error, image } = ImageLoader(fileName)

    if (error) return <p>{alt}</p>

    return (
        <>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <img
                    className={`${
                        className
                            ? className.padStart(className.length + 1)
                            : ''
                    }`}
                    src={image}
                    alt={alt}
                    {...props}
                />
            )}
        </>
    )
}

export default DynamicImage
