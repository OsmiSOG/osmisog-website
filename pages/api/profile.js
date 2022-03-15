import { profile } from "../../data/profile";

export default function handler(req, res) {
  res.status(200).json(profile)
}
