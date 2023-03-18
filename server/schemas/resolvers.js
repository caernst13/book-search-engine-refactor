const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(_, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user.id);
                return user
            };
            throw new AuthenticationError('not logged in')
        }
    },
    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          saveBook: async (_, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(context.user.id, 
                    { $addToSet: { savedBooks: args.input } },
                    { new: true });
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
          },
          removeBook: async (_, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(context.user.id,
                    { $pull: { savedBooks: { bookID: args.bookID } } },
                    { new: true });
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
          }
    }

};

module.exports = resolvers;
