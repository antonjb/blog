import React from 'react'
import './Logo.css'

interface LogoProps {
    className?: string
    width: number
    height: number
}

export const Logo: React.FC<LogoProps> = ({ className, width, height }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 461 60"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M33.52 51.22c-.815 1.463-1.908 2.83-3.28 4.1-1.44 1.333-3.133 2.413-5.08 3.24-1.947.827-4.067 1.24-6.36 1.24-3.573 0-6.787-.933-9.64-2.8-2.853-1.867-5.093-4.427-6.72-7.68C.813 46.067 0 42.413 0 38.36c0-4.16.827-7.827 2.48-11s3.893-5.667 6.72-7.48c2.827-1.813 6-2.72 9.52-2.72 2.293 0 4.44.4 6.44 1.2 2 .8 3.747 1.893 5.24 3.28a15.75 15.75 0 013.12 3.98V20.6c0-.693.213-1.28.64-1.76.427-.48 1.013-.72 1.76-.72.693 0 1.267.24 1.72.72.453.48.68 1.067.68 1.76v36c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68v-5.38zm-14.24 4.1c2.827 0 5.333-.733 7.52-2.2 2.187-1.467 3.907-3.493 5.16-6.08 1.253-2.587 1.88-5.48 1.88-8.68 0-3.147-.627-5.973-1.88-8.48-1.253-2.507-2.973-4.507-5.16-6-2.187-1.493-4.693-2.24-7.52-2.24-2.773 0-5.267.72-7.48 2.16-2.213 1.44-3.947 3.413-5.2 5.92-1.253 2.507-1.88 5.387-1.88 8.64 0 3.2.613 6.093 1.84 8.68 1.227 2.587 2.947 4.613 5.16 6.08 2.213 1.467 4.733 2.2 7.56 2.2zm81.04-37.04V9.4c0-.64.227-1.2.68-1.68.453-.48 1.027-.72 1.72-.72.693 0 1.267.24 1.72.72.453.48.68 1.04.68 1.68v8.88h8c.64 0 1.173.227 1.6.68.427.453.64 1 .64 1.64 0 .587-.213 1.093-.64 1.52-.427.427-.96.64-1.6.64h-8v26.8c0 1.493.2 2.613.6 3.36.4.747.92 1.24 1.56 1.48s1.28.36 1.92.36c.427 0 .813-.067 1.16-.2s.733-.2 1.16-.2c.48 0 .893.187 1.24.56.347.373.52.853.52 1.44 0 .747-.427 1.373-1.28 1.88-.853.507-1.867.76-3.04.76-.48 0-1.2-.04-2.16-.12-.96-.08-1.947-.373-2.96-.88s-1.853-1.4-2.52-2.68c-.667-1.28-1-3.12-1-5.52V22.76h-5.84c-.64 0-1.187-.227-1.64-.68-.453-.453-.68-.973-.68-1.56 0-.64.227-1.173.68-1.6.453-.427 1-.64 1.64-.64h5.84zm-44.64 6.85c.956-1.45 2.156-2.76 3.6-3.93a18.691 18.691 0 015.16-2.96c1.893-.72 3.8-1.08 5.72-1.08 3.52 0 6.333.707 8.44 2.12 2.107 1.413 3.627 3.333 4.56 5.76.933 2.427 1.4 5.107 1.4 8.04V56.6c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68V33.32c0-2.133-.347-4.08-1.04-5.84a8.999 8.999 0 00-3.4-4.24c-1.573-1.067-3.64-1.6-6.2-1.6-2.293 0-4.467.533-6.52 1.6-2.053 1.067-3.72 2.48-5 4.24-1.28 1.76-1.92 3.707-1.92 5.84V56.6c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68V20.76c0-.64.227-1.2.68-1.68.453-.48 1.027-.72 1.72-.72.693 0 1.267.24 1.72.72.453.48.68 1.04.68 1.68v4.37zM161.6 38.52c0 4.053-.893 7.693-2.68 10.92-1.787 3.227-4.2 5.76-7.24 7.6-3.04 1.84-6.48 2.76-10.32 2.76-3.787 0-7.213-.92-10.28-2.76-3.067-1.84-5.493-4.373-7.28-7.6-1.787-3.227-2.68-6.867-2.68-10.92 0-4.107.893-7.76 2.68-10.96 1.787-3.2 4.213-5.733 7.28-7.6s6.493-2.8 10.28-2.8c3.84 0 7.28.933 10.32 2.8 3.04 1.867 5.453 4.4 7.24 7.6 1.787 3.2 2.68 6.853 2.68 10.96zm-4.8 0c0-3.253-.667-6.147-2-8.68-1.333-2.533-3.16-4.533-5.48-6-2.32-1.467-4.973-2.2-7.96-2.2-2.933 0-5.56.733-7.88 2.2-2.32 1.467-4.16 3.467-5.52 6-1.36 2.533-2.04 5.427-2.04 8.68s.68 6.133 2.04 8.64c1.36 2.507 3.2 4.493 5.52 5.96 2.32 1.467 4.947 2.2 7.88 2.2 2.987 0 5.64-.733 7.96-2.2 2.32-1.467 4.147-3.453 5.48-5.96 1.333-2.507 2-5.387 2-8.64zm19.44-13.39c.956-1.45 2.156-2.76 3.6-3.93a18.691 18.691 0 015.16-2.96c1.893-.72 3.8-1.08 5.72-1.08 3.52 0 6.333.707 8.44 2.12 2.107 1.413 3.627 3.333 4.56 5.76.933 2.427 1.4 5.107 1.4 8.04V56.6c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68V33.32c0-2.133-.347-4.08-1.04-5.84a8.999 8.999 0 00-3.4-4.24c-1.573-1.067-3.64-1.6-6.2-1.6-2.293 0-4.467.533-6.52 1.6-2.053 1.067-3.72 2.48-5 4.24-1.28 1.76-1.92 3.707-1.92 5.84V56.6c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68V20.76c0-.64.227-1.2.68-1.68.453-.48 1.027-.72 1.72-.72.693 0 1.267.24 1.72.72.453.48.68 1.04.68 1.68v4.37zM365.52 51.155c-.789 1.507-1.869 2.908-3.24 4.205-1.467 1.387-3.173 2.507-5.12 3.36-1.947.853-4.067 1.28-6.36 1.28-3.52 0-6.707-.933-9.56-2.8-2.853-1.867-5.107-4.4-6.76-7.6-1.653-3.2-2.48-6.853-2.48-10.96 0-4.053.827-7.693 2.48-10.92 1.653-3.227 3.893-5.76 6.72-7.6 2.827-1.84 6-2.76 9.52-2.76 2.24 0 4.347.4 6.32 1.2 1.973.8 3.72 1.893 5.24 3.28a16.017 16.017 0 013.24 4.072V2.4c0-.64.213-1.2.64-1.68.427-.48 1.013-.72 1.76-.72.693 0 1.267.227 1.72.68.453.453.68 1.027.68 1.72v54.4c0 .64-.24 1.2-.72 1.68s-1.04.72-1.68.72c-.747 0-1.333-.24-1.76-.72a2.45 2.45 0 01-.64-1.68v-5.645zm-14.24 4.365c2.827 0 5.333-.733 7.52-2.2 2.187-1.467 3.907-3.467 5.16-6 1.253-2.533 1.88-5.427 1.88-8.68 0-3.2-.627-6.067-1.88-8.6-1.253-2.533-2.973-4.533-5.16-6-2.187-1.467-4.693-2.2-7.52-2.2-2.773 0-5.267.733-7.48 2.2s-3.947 3.467-5.2 6c-1.253 2.533-1.88 5.4-1.88 8.6 0 3.2.627 6.08 1.88 8.64 1.253 2.56 2.987 4.573 5.2 6.04 2.213 1.467 4.707 2.2 7.48 2.2zm33.877-21.12h27.323v-.64c-.267-2.507-1.093-4.64-2.48-6.4-1.387-1.76-3.053-3.093-5-4a14.328 14.328 0 00-6.12-1.36c-1.6 0-3.24.32-4.92.96-1.68.64-3.2 1.64-4.56 3-1.36 1.36-2.467 3.093-3.32 5.2-.403.994-.71 2.074-.923 3.24zm-.357 4.32c.01 3.115.65 5.942 1.92 8.48 1.28 2.56 3.12 4.587 5.52 6.08 2.4 1.493 5.307 2.24 8.72 2.24 1.813 0 3.467-.267 4.96-.8 1.493-.533 2.813-1.24 3.96-2.12 1.147-.88 2.093-1.8 2.84-2.76.587-.48 1.147-.72 1.68-.72.587 0 1.08.213 1.48.64.4.427.6.907.6 1.44 0 .64-.267 1.2-.8 1.68-1.6 1.92-3.68 3.587-6.24 5-2.56 1.413-5.36 2.12-8.4 2.12-4.107 0-7.733-.88-10.88-2.64-3.147-1.76-5.6-4.213-7.36-7.36-1.76-3.147-2.64-6.827-2.64-11.04 0-4.533.893-8.4 2.68-11.6 1.787-3.2 4.107-5.667 6.96-7.4 2.853-1.733 5.88-2.6 9.08-2.6 2.347 0 4.627.413 6.84 1.24a17.115 17.115 0 015.88 3.68c1.707 1.627 3.093 3.613 4.16 5.96 1.067 2.347 1.627 5.067 1.68 8.16 0 .64-.24 1.187-.72 1.64a2.37 2.37 0 01-1.68.68H384.8zm57.056 12.687L455.52 19.04c.427-1.067 1.2-1.573 2.32-1.52.533 0 1.04.173 1.52.52.48.347.72.84.72 1.48 0 .32-.04.573-.12.76-.08.187-.147.387-.2.6l-15.68 36.8c-.427.96-1.147 1.467-2.16 1.52-.48.053-.947-.067-1.4-.36a2.632 2.632 0 01-1-1.16l-15.76-36.8a2.48 2.48 0 01-.16-.48 2.63 2.63 0 01-.08-.64c0-.587.213-1.12.64-1.6.427-.48 1.04-.72 1.84-.72.427 0 .853.133 1.28.4.427.267.747.667.96 1.2l13.616 32.367z" />
        <circle cx="249" cy="36" r="24" />
        <circle cx="297" cy="36" r="15" />
    </svg>
)
