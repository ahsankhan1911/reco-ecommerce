# reco-ecommerce

# Techlogy Used So Far

## Front End

<ol>
<li>React UI Library</li>
<li>NextJs for react server side rendered SEO friendly websites </li>
<li>Material UI Kit</li>
<li>SCSS and JSS for styles</li>
</ol> 


## Back end

<ol>
<li>NodeJs </li>
<li>ExpressJs MVC Framework</li>
<li>MySQL Database</li>
<li>Sequelize as MySQL ORM for Nodejs</li>
<li>Bcrypt for password encryption (incomplete)</li>
<li>Json Web Token for Auth Tokens (incomplete)</li>
</ol> 

## Development Setup

### Backend

   <ol>
  <li>Install server packges on the root folder</li>
  
        npm install
   
   
  <li>Install <a href="https://www.apachefriends.org/index.html" target=_blank">XAMPP</a> </li>
  <li> Open XAMPP control panel and start Apache and MySQL servers</li>
  <li>After successful start go to <a href="http://localhost/" target="_blank">http://localhost/</a></li>
  <li>Then go to phpMyAdmin and create a Database named <b>reco</b></li>
  <li> Import data from /lib/data/reco.sql</li>
  <li> Then run this command </li>
   
        npm run dev
  </ol>
  
  ### Note:
  <p>if nodemon is not installed then install it globally using: </p>
        
        npm install nodemon -g
