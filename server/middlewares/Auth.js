import jwt from 'jsonwebtoken';
import User from '../Models/User.model.js';
import asyncHandler from 'express-async-handler';

// Authenticate user and generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Protection middleware
const protect = asyncHandler(async (req, res, next) => {
    let token;
    // Check if token exists in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            // Verify token and get user id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get user id from decoded token
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized: token failed to verify');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized: no token provided');
    }
});

// Admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

export { generateToken, protect, admin };
