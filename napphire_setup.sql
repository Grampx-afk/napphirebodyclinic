-- Napphire Body Clinic — Supabase Setup
-- Run this in your Supabase SQL Editor

CREATE TABLE bookings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text,
  notes text,
  status text DEFAULT 'pending',
  created_at timestamp DEFAULT now()
);

-- Optional: enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (so the form can submit)
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only allow authenticated users (you) to read bookings
CREATE POLICY "Allow authenticated reads" ON bookings
  FOR SELECT TO authenticated
  USING (true);
