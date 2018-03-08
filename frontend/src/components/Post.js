import React, { Component } from 'react';

class Post extends Component {

    render() {
        return (

            <div className="content">
                <h2 className="content-subhead">Post Title</h2>
                <p class="post-meta">
                    By <a href="#" class="post-author">Author</a> under <a class="post-category" href="#">Category</a> 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tortor semper sodales mollis. Ut dapibus laoreet mauris, vel eleifend ipsum finibus ac. Quisque vel ligula vel tellus scelerisque semper a a leo. Mauris vitae tempus urna, sit amet vehicula orci. Etiam porta velit nec est aliquet, sed iaculis dolor placerat. In eget iaculis erat. Aenean nec convallis mi. Nunc mollis, erat vitae semper consequat, felis tortor egestas felis, id mattis augue nibh at lorem. Mauris dapibus non nunc ac porta. Aliquam in ligula lobortis, tristique justo a, sodales eros. Nullam luctus ultrices elit id placerat. Phasellus id vehicula nibh. Etiam venenatis laoreet augue auctor dignissim.
                </p>
                <p>
                    10 Votes ( Upvote ) | ( Downvote )
                </p>
            </div>
        )
    }
}

export default Post