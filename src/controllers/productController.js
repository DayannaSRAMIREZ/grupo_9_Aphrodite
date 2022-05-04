module.exports={
    detail: (req,res)=>{
        res.render('productDetail')
    },
    cart: (req,res)=>{
        res.render('productCart')
    },
    product: (req,res)=>{
        res.render('products')
    }, 
    gift: (req,res)=>{
        res.render('gifts')
    },
    addProduct: (req, res)=> {
        res.render('addProducts')
    }
    
}