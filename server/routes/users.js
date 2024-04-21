app.get('/api/users', async (req, res) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.authorization?.split('')[1];

        if(!token){
            // Return an error response if no token is provided
            return res.status(401).json({error: 'Unauthorized: No token provided '});
        }

         // Verify the token
         jwt.verify(token, 'your-secret-key', async (err, decoded) => {
            if (err){
                // Return an error response if the token is invalid
                return res.status(401).json({ error: 'Unauthorized: Invalid token'});
            }
            // The decoded.userId should match the structure used in jwt.sign during login
            const user = await User.findById(decoded.userId);

            if (!user) {
                // Return an error response if the user is not found
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

              // Return the formatted user data as a JSON response
              res.json(formattedUser);
        });
    } catch (error) {
        // Handle any errors that occur during the execution of the code
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});