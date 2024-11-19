// src/pages/Dashboard.js
import { useEffect, useState } from 'react';
import Header from "../../components/header/Header";
import OverFlow from "../../components/overflow/OverFlow";
import { auth } from "../../auth/firebase";
import { useNavigate } from 'react-router-dom';
import SalesList from '../../components/saleList/SaleList';
import SalesFilter from '../../components/saleList/SalesFilter'; // استيراد الفلتر

export default function Dashboard() {
      const [user, setUser] = useState(null);
      const [filterDays, setFilterDays] = useState(30); // الحالة الخاصة بالفلتر
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

            return () => unsubscribe();
      }, [navigate]);

      return (
            <div>
                  <Header name={"Dashboard"} />
                  <SalesFilter filterDays={filterDays} setFilterDays={setFilterDays} /> {/* تمرير الفلتر */}
                  <OverFlow filterDays={filterDays} /> {/* تمرير الفلتر */}
                  <SalesList filterDays={filterDays} /> {/* تمرير الفلتر */}
            </div>
      );
}
