import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
import { actionCreators } from './store';
import { BackTop } from './styles.js';

import { 
	HomeWrapper ,
	HomeLeft,
	HomeRight

} from './styles.js';

class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0,0);
	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />

				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
				
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}
	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}
const mapState = (state) => ({
	showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))

		}

	}
});
export default connect (mapState, mapDispatch)(Home);