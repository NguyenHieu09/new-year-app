// import { firestore } from '../config/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export async function findRandomOpponent(currentUserId: string) {
//     try {
//         if (!currentUserId) {
//             throw new Error("Current user ID is invalid.");
//         }

//         const usersRef = collection(firestore, 'users');
//         const q = query(usersRef); // Không lọc theo id, chỉ đơn giản lấy tất cả các user
//         const snapshot = await getDocs(q);
//         console.log('Snapshot data:', snapshot.docs.map(doc => doc.data()));

//         if (snapshot.empty) {
//             console.log('No other users found');
//             throw new Error('Không tìm thấy đối thủ nào');
//         }

//         const users = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data(),
//         }));

//         // console.log('Users:', users); // Kiểm tra các users lấy được
//         const randomIndex = Math.floor(Math.random() * users.length);
//         return users[randomIndex];
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             console.error("Error finding opponent:", error.message);
//         } else {
//             console.error("An unknown error occurred");
//         }
//         throw error;
//     }
// }

import { firestore } from '../config/firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';

export async function findRandomOpponent(currentUserId: string) {
    try {
        if (!currentUserId) {
            throw new Error("Current user ID is invalid.");
        }

        const usersRef = collection(firestore, 'users');
        const q = query(usersRef); // Lấy tất cả người dùng
        const snapshot = await getDocs(q);
        console.log('Snapshot data:', snapshot.docs.map(doc => doc.data()));

        if (snapshot.empty) {
            console.log('No other users found');
            throw new Error('Không tìm thấy đối thủ nào');
        }

        // Lọc các người dùng có id khác currentUserId
        const users = snapshot.docs.filter(doc => doc.id !== currentUserId).map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log('Users:', users); // Kiểm tra các users lấy được

        if (users.length === 0) {
            console.log('No other users found');
            throw new Error('Không tìm thấy đối thủ nào');
        }

        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error finding opponent:", error.message);
        } else {
            console.error("An unknown error occurred");
        }
        throw error;
    }
}
