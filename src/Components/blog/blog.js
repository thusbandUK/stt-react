import React from "react";
import { Interweave } from 'interweave';

function Blog(props) {
    return(
        <div>
            <p>Woop! Woop!</p>
            <Interweave content='<p>So, okay here we go</p><p>&nbsp;</p><p>Now let&#39;s go down a line</p><p>&nbsp;</p><p><strong>I wanna do some bolding.&nbsp;</strong><em>And I want to do some italicsing.</em></p><p><em><span style="font-size:16px">Step it up a notch people</span></em></p>' />
            <Interweave content='<p>So, okay here we go</p>

<p>&nbsp;</p>

<p>Now let&#39;s go down a line</p>

<p>&nbsp;</p>

<p><strong>I wanna do some bolding.&nbsp;</strong><em>And I want to do some italicsing.</em></p>

<p><em><span style="font-size:16px">Step it up a notch people</span></em></p>' />

        </div>
    )
}

export default Blog;