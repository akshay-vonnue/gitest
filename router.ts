import Router from 'express';

const router = Router()

router.get("/login",()=>{
	console.log('calling login router')
});

export default router
