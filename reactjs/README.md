# Note

--> [` first start code please type this code in terminal `]

=>  ` npm install `
=>  ` npm run dev ` preview your project
=>  ` npm run bulid `   finish project use this code and push ` dist folder ` to github
=>  ` npm install react-router-dom ` install route-dom

---------------------------------------------------------------------------------------------

--> [` About route `]

# This code

import { BrowserRouter, Routes, Route } from "react-router-dom";


<BrowserRouter>
 <Header />
 <Routes>
   <Route>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
   </Route>
 </Routes>
</BrowserRouter>

=>  ` path ` show in route
=>  ` element ` go to some page if you want 
# Example

<Home /> in header if you click home it go to home page and in route it show (https://project/.vercel.app)
<About /> in header if you click about it go to about page and in route it show (https://project/about.vercel.app)

---------------------------------------------------------------------------------------------

--> [` Creat page new `]

=>  Add this ` import namefile from 'location file'; ` in App.jsx

---------------------------------------------------------------------------------------------

--> [` Import style `]

=>  Add this ` import 'location file'; ` in your code jsx

---------------------------------------------------------------------------------------------

--> [` Conect file `]

# Example

=>  In home page have header main footer. But you creat a header file separate from the main and footer and you want to conect with main and footer use ['import Header from 'location file;'] at fist line and [' <Header /> '] in [ "return" ] your file if you want to conect.

---------------------------------------------------------------------------------------------

--> [` Style Link Name and Button `]

=>  { Style } use [` <div style={{width: '100%', heihgt: '100%'}}></div> `]
=>  { Link } use [` Import {Link} from 'react-router-dom'; `] and [` <Link to=''></Link> `]
=>  { Name } use [` className `]
=>  { Button } use [` <button onClick={() => window.open = 'https://www.youtube.com'}>Go to youtube</button> `]