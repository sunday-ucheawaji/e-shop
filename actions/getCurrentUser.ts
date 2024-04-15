import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession(){
    return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try{
        const session = await getSession();
        console.log("SESSION >>>>", session);
        
        if (!session?.user?.email){
            return null
        }

        const currentUser = await prisma?.user.findUnique({
            where: {
                email: session?.user?.email,
            },
            include: {
                orders: true
            }
        })

        if(!currentUser){
            return null;
        }     
        
        console.log("CURRENT USER", currentUser);
        

        return {
            ...currentUser, 
            createdAt: currentUser.createdAt?.toISOString(),
            updatedAt: currentUser.updatedAt?.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        }


    }catch(error:any){
        return null
    }
}