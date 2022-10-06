import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
    
    <h1>Inline Style sheets</h1>
  
    Proficient web engineers don't utilize inline styles frequently, yet there are times when they are vital to comprehend or important to utilize.<br></br><br></br>
     The following are a couple of spots you might see inline styles:
     <br></br>
•	HTML email<br></br>
•	More established sites<br></br>
•	CMS content (for example WordPress, Drupal)<br></br>
•	Dynamic substance (for example HTML made or changed by JavaScript)<br></br>
<br></br>
HTML is intended for passing on organized data. CSS is worked to style that organized data. 
When inline styles are utilized, this reasonable detachment between organized data and styling is obscured. 
By isolating the CSS from the HTML, the markup can be semantic, and that implies that it can convey however much significance as could reasonably be expected without being tangled by enhanced visualizations.<br></br>
For instance, the article you are presently perusing is written in HTML, isolated into headings  and passages (and the message inside those labels). 

This article likewise has explicit text dimensions, line dividing, and colors, however those viewpoints influence just the visual show. By keeping the markup really semantic as could be expected, the article's substance can be rapidly altered without being diverted by style.
<br></br>
<br></br>
For instance, the tag is planned to contain a block statement, however through CSS, it's feasible to make  labels outwardly show up as headings. <br></br>
Since inline styles just influence the label they are written in, creating changes can be hard. 
In the event that you have composed similar style multiple times in 20 different  labels, you should alter every one of those spots at whatever point you need to roll out a paltry improvement. This can deplete! By utilizing a solitary CSS rule in a  tag or a different CSS document, you would just have to transform it in one spot.
You gain the most adaptability and power by placing your CSS in a different CSS record. 
<br></br>

<h3>Syntax:</h3>
<pre class="syntax">
  &lt;htmltag style="cssproperty1:value; cssproperty2:value;"&gt; &lt; htmltag &gt;  
</pre>

<h3>Example:</h3>
<pre class="example">
  &lt;h2 style="color:red;margin-left:40px;" &gt;Inline CSS is applied on this heading.&lt;/h2&gt;  <br></br>
  &lt;p&gt;This paragraph is not affected.&lt;/p&gt;  
</pre>

<h3>Output:</h3>
<pre class="output">
  Inline CSS is applied on this heading.
</pre>
<div>This paragraph is not affected</div>

<h2>Pros of Inline Styles</h2>
•	Good for quick fixes.<br></br>
•	Takes the highest specificity, so it overrides any style set with inline style or external stylesheets.<br></br>
•	You don't need to switch between files or scroll to the head section to modify the CSS<br></br>
•	Browsers always download the HTML, CSS, and JavaScript files before displaying a web page, so with inline CSS there are fewer files to be downloaded.<br></br>

<h2>Cons of Inline Styles</h2>
•	Makes the HTML messy, harder to maintain, and less readable.<br></br>
•	Cannot be reused across multiple HTML files<br></br>
•	You can end up overriding internal styles or external stylesheets<br></br>
•	You have limited styling options<br></br>

  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
