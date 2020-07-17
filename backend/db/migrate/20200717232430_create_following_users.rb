class CreateFollowingUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :following_users do |t|
      t.integer :following_id
      t.integer :follower_id
    end
  end
end
