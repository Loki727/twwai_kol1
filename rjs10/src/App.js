import {Routes, Route} from "react-router-dom";

<Routes>
   <Route path="/" element={<Home/>}>
       <Route index element={<List/>}/>
       <Route path="about/:id" element={<Details/>}/>
   </Route>
</Routes>
