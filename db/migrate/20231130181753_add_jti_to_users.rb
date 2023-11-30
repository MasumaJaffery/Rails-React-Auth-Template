class AddJtiToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :jti, :string, null: false
    add_index :users, :jti, unique: true
    # If you already have user records, you will need to initialize its `jti` column before setting it to not nullable. Your migration will look this way:
    # add_column :users, :jti, :string
    # User.all.each { |user| user.update_column(:jti, SecureRandom.uuid) }
    # change_column_null :users, :jti, false
    # add_index :users, :jti, unique: true
  end
end
