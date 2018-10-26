import React from 'react';
import Loadable from 'react-loadable';

const LoadabelComponent = Loadable({
	loader:() => import('./'),
	loading() {
		return <div>正在加载</div>
	}
});
export default () => <LoadabelComponent/>