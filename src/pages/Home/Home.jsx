import Header from "../../components/header/Header";
import ProductsList from "../../components/productsList/ProductsList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";

export default function Home() {
      const [user, setUser] = useState(null);  // تخزين المستخدم
      const navigate = useNavigate();

      useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((currentUser) => {
                  if (currentUser) {
                        setUser(currentUser); // إذا كان المستخدم موجودًا، قم بتحديث الحالة
                  } else {
                        setUser(null);  // إذا لم يكن هناك مستخدم، قم بتعيين القيمة null
                        navigate('/signin');  // الانتقال إلى صفحة تسجيل الدخول
                  }
            });

            return () => unsubscribe();  // التنظيف عند فك الاشتراك
      }, [navigate]);

      return (
            <>
                  <Header name={"Home"} />

                  <ProductsList /> 
            </>
      );
}
