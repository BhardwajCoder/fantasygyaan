import { useEffect, useRef } from 'react';
export default function Banner() {
    const banner = useRef();
    const atOptions = {
        key: '74d57f5d060d9ac88a7d9e4ece771043',
        format: 'iframe',
        height: 250,
        width: 320,
        params: {},
    };

    useEffect(() => {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            banner.current.append(conf);
            banner.current.append(script);
        }
    },);

    return <p className="mx-2 my-5 border border-gray-200 text-white " ref={banner} style={{width:"27%"}}></p>;
}