import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).populate('favorites watchlists followers following');
  res.json(user);
};

export const followUser = async (req, res) => {
  const target = await User.findById(req.params.id);
  if (!target) return res.status(404).json({ message: 'User not found' });
  target.followers.push(req.user._id);
  await target.save();
  req.user.following.push(target._id);
  await req.user.save();
  res.json({ message: 'Followed user' });
};
