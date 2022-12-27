import React from "react";

export default class ImageGallery extends React.Component {
    state = {
        imagesSearch: null
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.imagesSearch !== this.props.imagesSearch) {
    //         console.log(prevProps.imagesSearch)
    //         console.log(this.props.imagesSearch)
    //         const API_KEY = '31276153-bbebebed3806edcc66ad5b8b4';
    //             let page = 1;
    //         let per_page = 12;
    //             const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.imagesSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;

    //         fetch(url)
    //             .then(res => res.json)
    //             .then(imagesSearch => this.setState({
    //             imagesSearch
    //         }))
    //     }
    // }

    render() {
        return (
            <ul className="gallery">
                {/* {this.state.imagesSearch && <li>{this.state.imagesSearch.hits}</li> } */}
                {/* {this.state.imagesSearch.map(imageSearch => (
                                        <li>{imageSearch.hits}</li>

                )
                
                )} */}
            </ul>
        )
    }
}