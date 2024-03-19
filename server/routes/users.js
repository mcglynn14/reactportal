app.get('/api/users', async (req, res) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.authorization?.split('')[1];

        if(!token){
            return res.status(401).json({error: 'Unauthorized: No token provided '});
        }

         // Verify the token
         jwt.verify(token, 'your-secret-key', async (err, decoded) => {
            if (err){
                return res.status(401).json({ error: 'Unauthorized: Invaild token'});
            }
            // The decoded.userId should match the structure used in jwt.sign during login
            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
              // Return data only for the authenticated user
              // Inside the /api/users route
              const formattedUser = {
                _id: user._id,
                email: user.email,
                forename: user.forename,
                surname: user.surname,
                department: user.department,
                is_admin: user.is_admin,
                guardian: user.guardian,
                guardian_name: user.guardian_name,
                notes: user.notes,
                dob: user.dob,
              };

              res.json(formattedUser);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});