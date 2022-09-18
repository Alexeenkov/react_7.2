import React from 'react';
import Popular from './Popular/Popular';
import New from './New/New';

export default function wrapsCountViews(Component) {
    return function (props) {
        if (props.views > 1000) {
            return <Popular key={props.id}><Component {...props} /></Popular>;
        }
        if (props.views < 100) {
            return <New key={props.id}><Component {...props} key={props.id} /></New>;
        }
        return <Component {...props} key={props.id} />;
    }
}