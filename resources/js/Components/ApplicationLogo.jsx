export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 18 20" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M9.832 19.801C12.958 19.175 17 16.926 17 11.111C17 5.81999 13.127 2.29599 10.342 0.676992C9.723 0.316992 9 0.789992 9 1.50499V3.33299C9 4.77499 8.394 7.40699 6.71 8.50199C5.85 9.06099 4.92 8.22399 4.816 7.20399L4.73 6.36599C4.63 5.39199 3.638 4.80099 2.86 5.39499C1.461 6.45999 0 8.32999 0 11.11C0 18.221 5.289 20 7.933 20C8.087 20 8.249 19.994 8.417 19.985C8.863 19.929 8.417 20.084 9.832 19.8"
                fill="url(#paint0_linear_369_6)"
            />
            <path
                d="M5 16.444C5 19.064 7.111 19.874 8.417 19.986C8.863 19.93 8.417 20.085 9.832 19.801C10.871 19.434 12 18.492 12 16.444C12 15.147 11.181 14.346 10.54 13.971C10.344 13.856 10.116 14.001 10.099 14.227C10.043 14.945 9.353 15.517 8.884 14.971C8.469 14.489 8.294 13.784 8.294 13.333V12.743C8.294 12.389 7.937 12.153 7.631 12.335C6.495 13.008 5 14.394 5 16.444Z"
                fill="url(#paint1_linear_369_6)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_369_6"
                    x1="8.5"
                    y1="0.553528"
                    x2="8.5"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FFB800" />
                    <stop offset="1" stop-color="#F24E1E" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_369_6"
                    x1="9"
                    y1="20"
                    x2="9"
                    y2="12.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FF0000" />
                    <stop offset="1" stop-color="#F2841E" />
                </linearGradient>
            </defs>
        </svg>
    );
}
