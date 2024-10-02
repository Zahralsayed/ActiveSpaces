// scripts/createAdmin.js
const mongoose = require('mongoose');
const User = require('../models/User'); // تأكد من المسار الصحيح
const bcrypt = require('bcryptjs');

// الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');

        // إنشاء مستخدم جديد
        const adminUser = new User({
            username: 'admin',
            email: 'admin@example.com',
            password: 'yourpassword', // تأكد من اختيار كلمة مرور آمنة
            firstName: 'Admin',
            lastName: 'User',
            role: ['Admin'] // دور المدير
        });

        // حفظ المستخدم في قاعدة البيانات
        adminUser.save()
            .then(() => {
                console.log('Admin user created successfully');
                mongoose.connection.close(); // اغلاق الاتصال بعد الانتهاء
            })
            .catch(err => {
                console.error('Error creating admin user:', err);
                mongoose.connection.close();
            });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
