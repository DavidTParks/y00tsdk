import { Button } from 'ui';
import { getY00ts, getY00tById } from 'y00tsdk';
import { useEffect } from 'react';

export default function Web() {
    useEffect(() => {
        const fetchYoots = async () => {
            try {
                const { y00t } = await getY00tById('4');

                console.log(y00t.image);
            } catch (e) {
                console.log(e);
            }
        };

        fetchYoots();
    }, []);

    return (
        <div>
            <h1>Web</h1>
            <Button />
        </div>
    );
}
