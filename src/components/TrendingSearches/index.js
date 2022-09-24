import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner/Spinner";

const TrendigSearches = React.lazy( //import when you need import it
    () => import('./TrendingSearches')
)

export default function LazyTrendigSearches(){
    const {isNearScreen, fromRef} = useNearScreen({distance: '100px'})

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner/>}> {/*you need this for placeholder after import lazy*/}
            {isNearScreen ? <TrendigSearches/> : <Spinner/>}
        </Suspense>
    </div>
}
