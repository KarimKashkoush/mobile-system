import { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import OverFlow from "../../components/overflow/OverFlow";
import ProductsList from "../../components/productsList/ProductsList";
import { auth } from "../../auth/firebase";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
      const [user, setUser] = useState(null);
      const navigate = useNavigate();

      useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((currentUser) => {
                  if (currentUser) {
                        setUser(currentUser);
                  } else {
                        setUser(null);
                        navigate('/signin');
                  }
            });

            // التأكد من إلغاء الاشتراك عند التدمير (عند إغلاق الصفحة أو التنقل إلى صفحة أخرى)
            return () => unsubscribe();
      }, [navigate]);

      return (
            <div>
                  <Header name={"Dashboard"} />
                  <OverFlow />
                  <ProductsList />
            </div>
      );
}
